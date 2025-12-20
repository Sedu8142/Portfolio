<script setup>
  import { useContactStore } from '@/stores/contact';

  const contact = useContactStore()
</script>

<template>
  <div class="mainDiv">
    <div class="socialsDiv">
      <h1>Let's Connect!</h1>
      <div class="socials">
        <h2>Socials</h2>
        <div class="iconContainer">
          <button v-for="social in contact.socials" :key="social.name" @click="contact.redirect(social.link)">
            <img :src="social.icon" alt="">
          </button>
        </div>
      </div>
    </div>
    <div class="emailDiv">
      <h2>Send an <span style="font: inherit; color: #3B82F6;">E-mail</span></h2>
      <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="cac0ce32-c6a2-4524-8cca-455f837bcb76">
        <input type="text" name="name" placeholder="Your Name" required>
        <input type="text" name="email" placeholder="Your Email" required>
        <textarea name="message" id="" placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2.6rem;
  color: #3B82F6;
  height: 1em;
  margin: 0%;
  padding: 1rem;
}

h2 {
  font-size: 1.8rem;
  font-family: 'Poppins', sans-serif;
  color: whitesmoke;
  font-weight: bold;
  text-align: center;
  margin: 0%;
}

.mainDiv {
  width: 90%;
  height: 90%;
  margin: 2%;
  box-sizing: border-box;
  display: flex;
  gap: 1rem;
}


.socialsDiv {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
}

.socialsDiv h2 {
  margin-bottom: 2%;
  padding: 2%;
}

.emailDiv {
  width: 50%;
  margin: 0%;
  padding: 2%;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.2px);
  -webkit-backdrop-filter: blur(5.2px);
  border: 1px solid black;
  display: flex;
  flex-direction: column;
}

.socials {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.2px);
  -webkit-backdrop-filter: blur(5.2px);
  border: 1px solid black;
  padding: 2% 5% 4% 5%;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 1;
  padding: 10%;
  align-items: center;
}

form input, textarea {
  font-family: 'Poppins', sans-serif;
  width: 100%;
  background-color: transparent;
  box-shadow: 0 0 10px 1px black inset;
  color: whitesmoke;
}

form input:focus, textarea:focus{
  box-shadow: 0 0 10px 1px white;
}

input {
  height: 10%;
  padding: 1% 3%;
  border-radius: 40px;
}

textarea {
  height: 40%;
  padding: 2% 3%;
  border-radius: 30px;
}

button {
  position: relative;
  top: 5%;
  white-space: nowrap;
  width: auto;
  background-color: #3B82F6;
  color: whitesmoke;
  padding: 0.5em 1em;
  border-radius: 10px;
}

.iconContainer button {
  width: 25%;
  height: auto;
  background-color: transparent;
  border: none;
  box-shadow: 0 0 10px 1px black inset;
  border-radius: 20px;
  transition: transform 0.25s ease-in, box-shadow 0.25s ease-in;
  cursor: pointer;
}

.iconContainer button:hover {
  box-shadow: 0 0 10px 5px whitesmoke;
  transform: scale(1.1);
  transition: transform 0.25s ease-in, box-shadow 0.25s ease-in;
}

.iconContainer {
  display: flex;
  justify-content: center;
  gap: 10%;
}

.iconContainer img {
  width: 100%;
  height: auto;
  object-fit: contain;
}
</style>