<template>
    <div class="contact">
        <div class="contact-info">
            <div>
                Sun - Thu (11:00am - 9:30pm)
            </div>
            <div>
                Fri - Sat (11:00am - 10:00pm)
            </div>
            <div>
                <a href="tel:+12609098367">
                    <img class="icon" src="@/assets/icons/call-50.png" />
                    <div>TEL :+1(260)909-8367</div>
                </a>
            </div>
            <div>
                <a href="https://maps.app.goo.gl/kkDYPr5ekkbqE6PW8">
                    <img class="icon" src="@/assets/icons/location-48.png" />
                    <div>285 E Coliseum Blvd, Fort Wayne,IN 46805</div>
                </a>
            </div>
        </div>
        <div class="map-info">
            <iframe class="shadow mobile-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.6832272702673!2d-85.1384355!3d41.119608799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8815e3f543326ec7%3A0x2d86050f692dbb73!2sTokyo%20Buffet%20and%20Grill!5e0!3m2!1szh-CN!2shk!4v1717831522211!5m2!1szh-CN!2shk"
                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
    .contact {
        width: 1140px;
        display: flex;
        justify-content: center;
        color: #999;
        font-weight: 600;
        margin: 20px 0 0 0;
    }

    .contact-info {
        margin: 0 20px 0 0;
    }

    .contact a {
        text-decoration: none;
        color: #999;
    }

    .contact-info>div {
        border-bottom: 1px solid #999;
        line-height: 3em;
        padding: 0 20px;
    }

    .contact .icon {
        display: inline-block;
        height: 3em;
    }

    .contact-info a {
        display: flex;
        align-items: center;
        padding: 10px 0;
    }

    .map-info {
        box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);
    }
</style>