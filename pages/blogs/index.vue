<template>
   <div id="app">
    <h1>Cosmic Vue App</h1>
    <div v-if="loading">Loading...</div>
    <ul>
      <li v-for="blog in blogs" :key="blog.slug">
        <div>{{ blog.title }}</div>
        <n-link :to="`/blogs/${blog.slug}`" router>{{ blog.title }}  , {{ blog.metadata.teszt }}</n-link>
        <img alt="" :src="blog.metadata.image.url + '?w=400'"/>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import config from '../../config/config';
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