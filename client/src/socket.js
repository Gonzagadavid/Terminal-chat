import Event from 'events'

export default class SocketClient {
  #serverConnection = {}
  #serverListener = new Event()

  constructor ({ host, port, protocol }) {
    this.host = host
    this.port = port
    this.protocol = protocol
  }

  sendMessage (event, message) {
    this.#serverConnection.write(JSON.stringify({ event, message }))
  }

  attachEvents (events) {
    try {
      this.#serverConnection.on('data', data => {
        data.toString()
        .split('\n')
        .filter(line => !!line)
        .map(JSON.parse)
        .map(({ event, message }) => {
          this.#serverListener.emit(event, message)
        })
      })
    } catch (err) {
      console.log('invalid!', data.toString(), err.message)
    } 

    this.#serverConnection.on('end', _ => {
      console.log('I disconnect')
    })

    this.#serverConnection.on('error', err => {
      console.error('deu RUIM', err)
    })

    for (const [key, value] of events) {
      this.#serverListener.on(key, value)
    }
  }

  async createConnection () {
    const options = {
      port: this.port,
      host: this.host,
      headers: {
        Connection: 'Upgrade',
        Upgrade: 'websocket'
      }
    }

    const http = await import(this.protocol)
    const req = http.request(options)
    req.end()

    return new Promise(resolve => {
      req.once('upgrade', (res, socket) => resolve(socket))
    })
  }

  async initialize () {
    this.#serverConnection = await this.createConnection()
    console.log('I connect to the server!!!')
  }
}
