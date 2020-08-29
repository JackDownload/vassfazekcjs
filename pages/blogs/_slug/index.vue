<template>
  <v-layout>
    <v-flex text-xs-left>
           <li v-for="blog in blogs" :key="blog.slug">
        <div>{{ blog.title }}</div>
        <n-link :to="`/blogs/${blog.slug}`" router>{{ blog.title }}  , {{ blog.slug }} , {{ blog.metadata.slug }}</n-link>
        <img alt="" :src="blog.metadata.image.url + '?w=400'"/>
      </li>
       <v-btn color="primary" flat nuxt to="/">Back</v-btn>
      <h1>{{title}}</h1><br>
      <div>
      <img
        :src="`${image}`"
        alt="Fitness_quotes"
        class="mb-5"
      >
      </div>
      <div v-html="body"></div>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from "axios";
import config from '../../../config/config';
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
    };
        
</script>



