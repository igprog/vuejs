export const mixin = {
    data() {
        return {
            appname: 'Vue.js Test',
            backend: 'http://localhost/kup/',
            frontend: 'http://localhost:8080/',
            loading: false
        };
    },
    created() {
        // console.log('Mixin...')
    },
    methods: {
        testMixin() {
            alert('mixin ok');
        },
        get(path) {
            debugger;
            return this.$http.get(this.frontend + path).then(res => {
                return JSON.parse(res.body.d);
            })
        },
        post(service, method, data) {
            this.loading = true;
            return this.$http.post(this.backend + service + '.asmx/' + method, data).then(res => {
                this.loading = false;
                return JSON.parse(res.body.d);
            });
        }
    }
}