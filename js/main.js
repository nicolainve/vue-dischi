const app = new Vue({
    el:'#app',
    data: {
        cds: [],
        actualGenre: 'all'
    },
    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(response => {
            this.cds = response.data.response;
        })
        .catch(error => {
            console.log(error);
        })
    },
    methods: {
        filterGenre() {
            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(response => {
                let cdsList = response.data.response;

                if (this.actualGenre !== 'all') {
                    cdsList = cdsList.filter(element => {
                        return element.genre.toLowerCase() === this.actualGenre
                    });
                }

                this.cds = cdsList;
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
});