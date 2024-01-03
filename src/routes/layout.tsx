import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href="https://qwik.design/" target="_blank">
          Made with ♡ by Qwik Design
        </a>
      </footer>
    </>
  );
});
