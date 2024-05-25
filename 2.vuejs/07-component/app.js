const app = Vue.createApp({
    data(){
        return {
            friends:[
                {
                    id: "manuel",
                    name: "Manuel Lorenz",
                    phone: "01234 5678 991",
                    email: "manuel@localhost.com"
                },
                {
                    id: "julie",
                    name: "Julie Jones",
                    phone: "09876 543 221",
                    email: "julie@localhost.com"
                },
            ],
        };
    }
});

app.component('friend-contact',{
    template: `
        <li>
            <h2>{{ obj.name }}</h2>
            <button @click.prevent="toggle">{{ showDetails ? "Hide":"Show" }} Details</button>
            <ul v-show="showDetails">
                <li><strong>Phone:</strong> {{ obj.phone }}</li>
                <li><strong>Email:</strong> {{ obj.email }}</li>
            </ul>
        </li>
    `,
    data(){
        return {
            showDetails: false
        };
    },
    methods: {
        toggle(){
            this.showDetails = !this.showDetails;
        }
    }
});

app.mount("#app");