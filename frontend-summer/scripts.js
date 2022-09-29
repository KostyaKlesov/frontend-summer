window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar-links").style.top = "0";
  } else {
    document.getElementById("navbar-links").style.top = "-50px";
  }
}

var i = 0;
var txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita asperiores deleniti saepe nemo odio quibusdam delectus exercitationem tempore! Tenetur, possimus provident! Animi ducimus sed dolor minima rem aspernatur minus reprehenderit, blanditiis, magnam numquam quibusdam doloribus! Ipsa ipsum, unde voluptas, recusandae ducimus sequi illum quod distinctio alias id nostrum et in nihil mollitia. Obcaecati fugiat rerum qui odio perspiciatis! Illum hic aspernatur eos minus eaque, obcaecati enim commodi ratione itaque, eligendi officia optio. Voluptate inventore amet unde nostrum atque sit earum mollitia modi, rerum sed. Nam sed enim et incidunt corporis nobis exercitationem sapiente eaque natus error similique, iure, placeat vitae quisquam totam molestiae aspernatur beatae, saepe praesentium? Cum ullam inventore soluta ducimus numquam sapiente voluptatem illum ex illo provident maiores id officia, ab debitis itaque, officiis dolore at commodi saepe. Voluptatem quasi animi vel, veniam, at labore iste doloribus consequuntur ipsam nesciunt rem eaque odio assumenda! Officia eaque, reiciendis quaerat nesciunt explicabo quibusdam eveniet quisquam rem, voluptatem doloribus tempore officiis non. Vero atque neque quisquam iste molestiae temporibus reiciendis? Corrupti non tempora autem eveniet, laboriosam dolores perspiciatis neque modi illo iusto quam inventore deserunt recusandae quas temporibus rem, vitae ea mollitia suscipit adipisci placeat magnam sequi? Architecto temporibus officia doloribus ratione odit veniam libero earum voluptas saepe obcaecati. Libero commodi magni doloribus consequuntur, aut illo dolorem praesentium ullam repellat a blanditiis eos exercitationem delectus et impedit perferendis, nisi optio dicta? Iste corporis numquam asperiores distinctio autem! Voluptate quod ipsam reprehenderit quibusdam odio. Consequatur sunt dicta laborum voluptatum perspiciatis eaque inventore vero veritatis obcaecati eum laudantium deleniti molestias unde, voluptas sint. Ullam qui libero ipsum exercitationem. Nisi ab dolor eos repudiandae illum mollitia sint explicabo incidunt cumque soluta quis exercitationem aliquid laborum enim rerum, facilis dolorem libero! Iste ab eum perferendis. Possimus earum rerum facere voluptatem optio aliquid fugit iure praesentium accusantium delectus repudiandae porro nihil voluptatibus error esse rem animi, distinctio debitis illum! Odio voluptas tenetur tempora quod sed saepe fugiat officiis ut explicabo quae, a soluta et sit laboriosam aperiam ipsam? Sit provident facere aliquam odit quaerat incidunt! Est inventore possimus quae, neque magnam voluptate voluptatem, quia non qui vitae veniam id ipsam similique in, pariatur rem officiis nobis cupiditate. '; /* The text */
var speed = 1; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}