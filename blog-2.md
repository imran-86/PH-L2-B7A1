                                         Title  

                         The Four Pillars of OOP in TypeScript
                                  
                                       Introduction  

        As our project grows, our code gets harder to manage. More features, more bugs, more developers . Object-Oriented Programming (OOP) gives us four tools to fight this complexity.That are Encapsulation, Inheritance, Abstraction, and Polymorphism. Let's explore each one with simple examples.

                                Pillar 1 — Encapsulation: Protect Our Data 

        Encapsulation means hiding internal data and only allowing access through controlled methods.   
        Let's see one example :   
        
        
        class BankAccount {
  private balance: number;  // hidden from outside
  private pin: string;

  constructor(balance: number, pin: string) {
    this.balance = balance;
    this.pin = pin;
  }

  get balance(): number {
    return this.balance; // read-only access
  }

  withdraw(amount: number, pin: string): string {
    if (pin !== this.pin) return "Wrong PIN!";
    if (amount > this.balance) return "Not enough balance";
    this.balance -= amount;
    return `Withdrawn ${amount}. Balance: ${this.balance}`;
  }
}

const account = new BankAccount(10000, "1234");
console.log(account.balance);               // 10000
console.log(account.withdraw(3000, "1234")); // Success
// account.balance = -99999;               // Error private


                         Pillar 2 — Inheritance: Share Code Between Classes  

                Inheritance lets a child class reuse everything from a parent class. Write common logic once  All the children get it for free.


                // Parent class — shared logic
class Animal {
  constructor(public name: string) {}
  move(): string {
    return `${this.name} is moving.`;
  }
}

// Child classes — inherit from Animal
class Dog extends Animal {
  bark(): string {
    return `${this.name} says: Woof`;
  }
}

class Cat extends Animal {
  meow(): string {
    return `${this.name} says: Meow`;
  }
}

const dog = new Dog("Tommy");
const cat = new Cat("Mimi");

console.log(dog.move()); // Tommy is moving.  
console.log(dog.bark()); // Tommy says: Woof
console.log(cat.move()); // Mimi is moving.  
console.log(cat.meow()); // Mimi says: Meow


                       Pillar 3 — Abstraction: Hide Complexity, Show Simplicity

                Abstraction means hiding how something works and only showing what it does. The user knows what to call  not how it works inside.


                // Abstract class — cannot be used directly
abstract class PaymentProcessor {
  abstract process(amount: number): Promise<string>; // must be implemented

  // Shared logic available to all children
  protected formatAmount(amount: number): string {
    return `$${amount.toFixed(2)}`;
  }
}

class BkashPayment extends PaymentProcessor {
  async process(amount: number): Promise<string> {
    // Complex bKash API logic hidden here
    return `bKash payment of ${this.formatAmount(amount)} successful!`;
  }
}

class CardPayment extends PaymentProcessor {
  async process(amount: number): Promise<string> {
    // Complex card gateway logic hidden here
    return `Card payment of ${this.formatAmount(amount)} successful!`;
  }
}

const bkash = new BkashPayment();
console.log(await bkash.process(1500)); // bKash payment of $1500.00 successful!


                           Pillar 4 — Polymorphism: Same Interface, Different Behavior   
                    
            Polymorphism means different objects can respond to the same method call in their own way.  

        abstract class Notification {
  abstract send(message: string): void;
}

class EmailNotification extends Notification {
  send(message: string): void {
    console.log(`Email: ${message}`);
  }
}

class SmsNotification extends Notification {
  send(message: string): void {
    console.log(`SMS: ${message}`);
  }
}

class PushNotification extends Notification {
  send(message: string): void {
    console.log(`Push: ${message}`);
  }
}

// Polymorphism in action — same loop, different behavior
const notifications: Notification[] = [
  new EmailNotification(),
  new SmsNotification(),
  new PushNotification(),
];

notifications.forEach(n => n.send("Your order has been shipped"));

// Email: Your order has been shipped
// SMS: Your order has been shipped
// Push: Your order has been shipped

                                         Conclusion  
                                      
         In large TypeScript projects, these four pillars are not optional — they are essential. Master them, and your code will be clean, scalable, and easy to maintain.
