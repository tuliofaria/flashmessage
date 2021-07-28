const Redis = require("ioredis");
const redis = new Redis(
  "redis://:3950bfbeb9a249ceb59f11e4c9912bad@us1-full-pup-34431.upstash.io:34431"
);

// redis.set("devpleno", "devpleno.com");
// redis.expire("devpleno", 10);
redis.get("devpleno").then((result) => {
  console.log(result);
});
