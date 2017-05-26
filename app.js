import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.headers.common['Api-Key'] = '697wgfynhw53p7fzsw7dbder';

var app = new Vue({
    el: '#app',
    data: {
        results: [],
        page: 1
    },
    methods: {
        fetch: function () {
            this.$http.get('https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best&page_size=10&page='+this.page).then(function ($response) {
                //console.log($response);
                $response.body.images.forEach(function (image) {
                    this.results.push(image.display_sizes[0].uri);
                }.bind(this));

                this.page += 10;
            });
        }
    }
});

app.fetch();
