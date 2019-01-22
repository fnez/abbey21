<template>
    <div class="contact">
        <h1>{{ this.title }}</h1>
        <div class="columns content-container">
            <div class="column">
                <div class="card">
                    <figure class="card-image">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.675597618657!2d-80.88004388447955!3d35.13976816708306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88569ea21fed9563%3A0x17e1399260aeb22b!2sAbbey+Furniture!5e0!3m2!1sen!2sus!4v1548111228169"
                            width="424" height="315" frameborder="0" style="border:0" allowfullscreen>
                        </iframe>
                    </figure>
                    <div class="card-content">
                        <h2 class="title is-5">Address</h2>
                        <p>809 E Arrowood Rd #1900</p>
                        <p>Charlotte, NC 28217</p>
                        <p>(704)521-1288</p>
                    </div>
                </div>
            </div>


            <div class="column">
                <div class="form card">
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input class="input is-danger" type="text" placeholder="Name">
                        </div>
                        <p class="help is-danger">This email is invalid</p>
                    </div>

                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input class="input is-danger" type="email" placeholder="Email input">
                        </div>
                        <p class="help is-danger">This email is invalid</p>
                    </div>

                    <div class="field">
                        <label class="label">Message</label>
                        <div class="control">
                            <textarea class="textarea" placeholder="Message"></textarea>
                        </div>
                    </div>

                    <div class="field is-grouped">
                        <div class="control">
                            <button class="button is-link">Submit</button>
                        </div>
                    </div>
                </div> <!-- .card -->
            </div> <!-- .column -->
        </div> <!-- .columns -->
    </div>

</template>

<script>
    export default {
        name: 'Contact',
        components: {},
        data() {
            return {
                title: 'Contact',
            }
        }
    }
</script>

<style scoped lang="sass">
    @import '../mainStyles'
    @import '../responsive'

    .content-container 
        max-width: 1200px 
        margin: 0 auto 
        padding: 60px 0 
        .card 
            padding: 30px
            &.form
                text-align: left
        
</style>