import { component$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { QwikRive } from 'qwik-rive';

export default component$(() => {
  const store = useStore({
    src: 'https://cdn.rive.app/animations/vehicles.riv',
    artwork: 'jeep',
  });
  // const store = {
  //   src: 'https://cdn.rive.app/animations/vehicles.riv',
  // };
  return (
    <div class="center">
      <h1 text-align="center">
        Welcome to Qwik Rive Demo <span class="lightning">⚡️</span>
      </h1>
      <QwikRive options={store} />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
