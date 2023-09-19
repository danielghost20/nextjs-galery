import Nabvar from "@/components/Nabvar";


export default function Home() {
  return (
    <>
      <header className="flex flex-col items-center justify-center w-full min-h-screen gap-5">
        <Nabvar />
        <h1 className="max-w-4xl text-3xl font-semibold text-center sm:text-6xl">
          Sube tus imágenes y mantén <span className="text-red-500">espacio</span> libre en tu dispositivo
        </h1>
        <p className="max-w-3xl px-2 py-4 text-base text-center sm:text-lg">Guarda tus imágenes y que más te gustan y mantén un control de estas mismas</p>
        <a href="https://github.com/danielghost20" target="blank" className="px-4 py-3 font-medium rounded-md text-background bg-foreground">Ver más proyectos</a>
      </header>
    </>
  );
}
