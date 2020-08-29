<template>
  <v-layout>
    <v-flex text-xs-left>
       <v-btn color="primary" flat nuxt to="/">Back</v-btn>
            <li v-for="blog of blogs" :key="blog.slug">
        <n-link :to="`/blogs/${blog.slug}`">{{ blog.title }}</n-link>
      </li>
      <div>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from "axios";
import config from '../config/config';
export default {
    data ()
    {bolgs: []
    },
  asyncData () {
    return axios.get(config.url + config.bucket_slug + '/object-type/blogs',{
            params: {
                read_key: config.read_key
            }
        })
      .then(res => {
        return {blogs : res.data.objects}
      });
  }
};
        
</script>