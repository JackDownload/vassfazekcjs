const config = {
    bucket_name: process.env.JAMSTACK_APP_BUCKET_SLUG || "Vassfazek",
    bucket_slug: process.env.JAMSTACK_APP_BUCKET_SLUG || "e20d2460-e9a1-11ea-bb84-810786fdb576",
    bucket_id: process.env.JAMSTACK_APP_BUCKET_ID || "5f49c19809e9ef000757cd30",
    read_key: process.env.JAMSTACK_APP_BUCKET_READ_KEY || "oDeqDcrAXSUqX7e2os8UnPgs3fEGueLrrxaOM1OieORfXNOXxQ",
    write_key: process.env.JAMSTACK_APP_BUCKET_WRITE_KEY || "9iyvoXMgJcqAJ3jZv45gJwRYjxY6YeH8o5XgbNhf5KJ5WrcPUj ",
    url: "https://api.cosmicjs.com/v1/"
  }
  export default config;