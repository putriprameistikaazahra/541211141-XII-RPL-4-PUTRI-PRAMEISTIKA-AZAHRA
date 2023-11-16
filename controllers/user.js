let users = [
    {id: 1, nama: "Ranzyah", email: "ranzyah9@gmail.com"},
    {id: 2, nama: "Adinata", email: "adinata9@gmail.com"},
    {id: 3, nama: "Aldo", email: "aldo9@gmail.com"},
]

module.exports = {
    index:  (req, res) => {
        if(users.length > 0){
            res.json({
                status: true,
                data: users,
                method: req.method,
                url: req.url
            })
        } else{
            res.json({
                status: false,
                message: "Datanya Gak Ada (?)"
            })
        }
    },
    store:  (req, res) => {
        users.push(req.body)
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Data Udah Ditambahin"
        })
    },
    update:  (req, res) => {
        const id = req.params.id
        users.filter(user => {
            if (user.id == id){
                user.nama = req.body.nama
                user.email = req.body.email
                return user
            }
        })
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Data Udah Berubah"
        })
    },
    destroy: (req, res) => {
        const id = req.params.id
        users = users.filter(user => user.id != id)
    
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Data Udah Diilangin"
        })
    }
}