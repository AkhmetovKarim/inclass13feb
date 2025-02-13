//Task 5
let orders = [
{id: 101, customer: "Alice", total: 300},
{id: 102, customer: "Bob", total: 450},
{id: 103, customer: "Charlie", total: 200},

];

function findOrders(orders, orderId) {
    return orders.find(order => order.id === orderId)
}
console.log(findOrders(orders, 101));

//Task 6
let inventory = {
    items: [],
    addItem(name, quantity) {
        this.items.push({ name, quantity });
    },
    removeLatestItem() {
         this.items.pop();
    },
    removeFirstItem() {
         this.items.shift();
    }
};

    inventory.addItem("Monitor", 5); //adding monitor
    inventory.addItem("Keyboard", 10); //adding keyboard
    inventory.addItem("Mouse", 3); //ading mouse
    
    console.log(inventory.items); //viewing all tems
    inventory.removeLatestItem(); //removing latest
    console.log(inventory.items); //view items remaining
    inventory.removeFirstItem(); // remove firt item
    console.log(inventory.items) //view items remaining

    //Task 7

    let employees = [
        {name: "Alice", position: "Developer", salary: 70000},
        {name: "Bob", position: "Designer", salary: 60000},
        {name: "Charlie", position: "Manager", salary: 90000},
        
        ];
        function findEmployees (employees, name){
            return employees.find(employee => employee.name === name)
        }

    console.log(findEmployees(employees, "Charlie"));

    //Task 8
    //let order A = [
        //{id: 3, customer: "Charlie" },
        //{id: 4, customer: "David"}
    //];
    //let order B = [
    //    {id: 3, customer: "Bob" },
       // {id: 4, customer: "Alice }
    //];
    
    //function combineorders(order2) { 
     //  return (...order1, ...order2)
    //}

   // console.log(combineOrders(orderA, orderB))


        
    
        