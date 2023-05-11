import { Component, OnInit, Input } from '@angular/core';
//import { Product } from './product';
//import { ProductService } from './productservice';
import { Person } from './person';
import { PersonService } from './personservice';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
    styleUrls: ['./app.component.scss']
})
export class AppComponent { 
        
    productDialog: boolean;

    //products: Product[];

    //product: Product;

    //selectedProducts: Product[];
    
    people: Person[];

    person: Person;

    selectedPeople: Person[];

    submitted: boolean;

    //constructor(private productService: ProductService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

    constructor(private personService: PersonService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

    // ngOnInit() {
    //     this.productService.getProducts().then(data => this.products = data);
    // }

    ngOnInit() {
        this.personService.getPeople().then(data => this.people = data);

        this.personService.getPeople().then((data) => {
            console.log(data);
        });
    }

    // openNew() {
    //     this.product = {};
    //     this.submitted = false;
    //     this.productDialog = true;
    // }

    openNew() {
        this.person = {};
        this.submitted = false;
        this.productDialog = true;
    }

    // deleteSelectedProducts() {
    //     this.confirmationService.confirm({
    //         message: 'Are you sure you want to delete the selected products?',
    //         header: 'Confirm',
    //         icon: 'pi pi-exclamation-triangle',
    //         accept: () => {
    //             this.products = this.products.filter(val => !this.selectedProducts.includes(val));
    //             this.selectedProducts = null;
    //             this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
    //         }
    //     });
    // }

    deleteSelectedPeople() {
        this.confirmationService.confirm({
            message: 'Você tem certeza de que deseja deletar as pessoas selecionadas?',
            header: 'Confirmar',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.people = this.people.filter(val => !this.selectedPeople.includes(val));
                this.selectedPeople = null;
                this.messageService.add({severity:'success', summary: 'Com sucesso', detail: 'Pessoas deletadas', life: 3000});
            }
        });
    }

    // editProduct(product: Product) {
    //     this.product = {...product};
    //     this.productDialog = true;
    // }

    editPerson(person: Person) {
        this.person = {...person};
        this.productDialog = true;
    }

    // deleteProduct(product: Product) {
    //     this.confirmationService.confirm({
    //         message: 'Are you sure you want to delete ' + product.name + '?',
    //         header: 'Confirm',
    //         icon: 'pi pi-exclamation-triangle',
    //         accept: () => {
    //             this.products = this.products.filter(val => val.id !== product.id);
    //             this.product = {};
    //             this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
    //         }
    //     });
    // }

    deletePerson(person: Person) {
        this.confirmationService.confirm({
            message: 'Você tem certeza de que deseja deletar ' + person.name + '?',
            header: 'Confirmar',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.people = this.people.filter(val => val.id !== person.id);
                this.person = {};
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
            }
        });
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }
    
    // saveProduct() {
    //     this.submitted = true;

    //     if (this.product.name.trim()) {
    //         if (this.product.id) {
    //             this.products[this.findIndexById(this.product.id)] = this.product;                
    //             this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Produto Atualizado', life: 3000});
    //         }
    //         else {
    //             this.product.id = this.createId();
    //             this.product.image = 'product-placeholder.svg';
    //             this.products.push(this.product);
    //             this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Produto Criado', life: 3000});
    //         }

    //         this.products = [...this.products];
    //         this.productDialog = false;
    //         this.product = {};
    //     }
    // }

    savePerson() {
        this.submitted = true;

        if (this.person.name.trim()) {
            if (this.person.id) {
                this.people[this.findIndexById(this.person.id)] = this.person;                
                this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Cadastro atualizado', life: 3000});
            }
            else {
                this.person.id = this.createId();
                //this.person.image = 'product-placeholder.svg';
                this.people.push(this.person);
                this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Pessoa cadastrada', life: 3000});
            }

            this.people = [...this.people];
            this.productDialog = false;
            this.person = {};
        }
    }

    // findIndexById(id: string): number {
    //     let index = -1;
    //     for (let i = 0; i < this.products.length; i++) {
    //         if (this.products[i].id === id) {
    //             index = i;
    //             break;
    //         }
    //     }

    //     return index;
    // }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.people.length; i++) {
            if (this.people[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for ( var i = 0; i < 5; i++ ) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }
}