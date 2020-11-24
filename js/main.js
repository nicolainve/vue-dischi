const app = new Vue({
    el:'#app',
    data: {
        cds: []
    },
    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(response => {
            this.cds = response.data.response;
        })
        .catch(error => {
            console.log(error);
        })
    }
});