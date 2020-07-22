class StorageService {
  constructor () {
    this.PREFIX = 'TASK_TRACK_'
  }
  
  persist (key, value, storageType) {
    const storage = (storageType === 'session') ? sessionStorage : localStorage

    if (typeof value !== 'string') {
      value = JSON.stringify(value)
    }

    storage.setItem(this.PREFIX + key, value)
  }

  read (key) {
    let value = localStorage.getItem(this.PREFIX + key) || sessionStorage.getItem(this.PREFIX + key)

    try {
      value = JSON.parse(value)
    } catch (err) {}

    return value
  }

  remove (key) {
    localStorage.removeItem(this.PREFIX + key)
    sessionStorage.removeItem(this.PREFIX + key)
  }
}

export default new StorageService()