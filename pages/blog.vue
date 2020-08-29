<template>
  <div>
    <h1>Blog blogs</h1>
    <p v-if="$fetchState.pending">Fetching blogs...</p>
    <p v-else-if="$fetchState.error">
      Error while fetching blogs: {{ $fetchState.error.message }}
    </p>
    <ul v-else>
      <li v-for="blog of blogs" :key="blog.id">
        <n-link :to="`/blogs/${blog.id}`">{{ blog.title }}</n-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import config from '../config/config';
  export default {
    data() {
      return {
        blogs: []
      }
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