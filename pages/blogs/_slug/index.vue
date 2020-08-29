<template>
    <div id="main">
        <div class="inner">
            <h1>{{blog.title}}
                <nuxt-link v-bind: :to="`/blogs/${blog.slug}`">
                    @{{blog.slug}}
                </nuxt-link>
            </h1>
            <span class="image main" v-if="blog.metadata"><img :src="blog.metadata.image.url"></span>
            <div v-html="blog.content"></div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        asyncData ({ params }) {
    return axios.get(config.url + config.bucket_slug + '/object-type/blogs',{
            params: {
                read_key: config.read_key
            }
        })
      .then(res => {
        return {blogs: res.data.objects}
      });
  },
        head () {
            return {
                title: this.blog.title
            }
        }
    }
</script>