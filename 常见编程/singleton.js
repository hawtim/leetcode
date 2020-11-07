class SingleTon {
  constructor(name) {
    this.name = name
    this.instance = null
  }
  static getInstance(name) {
    if (!this.instance) {
      return new SingleTon(name)
    }
    return this.instance
  }
  getName() {
    return this.name
  }
}

