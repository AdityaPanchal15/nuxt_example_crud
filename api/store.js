// import BaseApi from "./api"

export class Store {

    constructor (ctx) {
        this.ctx = ctx 
    }
  
    fetchAll(key) {
        return JSON.parse(localStorage.getItem(key))
    }

    update(key, id, row) {
        const rows = this.fetchAll(key)
        if(!rows) {
            return null
        }

        const index = rows.findIndex((row) => row.id === id)
        
        if(index < 0) {
            return null
        }

        rows[index] = row
        this.insert(key,rows)
        
        return this
    }

    insert(key, data, newRow=false) {
        if(!newRow){
            localStorage.setItem(key, JSON.stringify(data))
            return this
        }
        let rows = this.fetchAll(key)
        if(!rows) {
            rows = []
        }
        const id = rows.length ? rows[rows.length -1].id : 0
        data.id = id + 1
        rows.push(data)
        localStorage.setItem(key, JSON.stringify(rows))
        return this
    }

    delete(key,id=0) {
        if(!id) {
            localStorage.removeItem(key);
            return this
        }
        const rows = this.fetchAll(key)
        if(!rows) {
            return this
        }
        const index = rows.findIndex((row) => row.id === id)
        rows.splice(index,1)
        this.insert(key,rows)
        return this
    }

    fetchRow(key,id) {
        const obj = this.fetchAll(key)
        if(!obj) {
            return null
        }
        const row = obj.find((item) => item.id === id)
        return row
    }
}  
