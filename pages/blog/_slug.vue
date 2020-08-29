<template>
<Blogpost/>
</template>
<script>
import axios from "axios";
import config from '../../config/config';
import Blogpost from '../../components/Blogpost.vue';
export default {
  asyncData (context) {
    return axios.get(config.url + config.bucket_slug + '/object-type/blogs',{
            params: {
                read_key: config.read_key
            }
        })
      .then(res => {
        return {title : res.data.objects[0].title, body: res.data.objects[0].content, image:res.data.objects[0].metadata.image.url}
      });
  }
};
        
</script>