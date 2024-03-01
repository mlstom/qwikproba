import { component$ } from '@builder.io/qwik';
import { ImageGallery } from './ImageGallery';


export const Hero = component$(() => {
  return <>
    <ImageGallery client:visible />
  </>
});