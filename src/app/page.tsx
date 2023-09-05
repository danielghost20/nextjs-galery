import Nabvar from "@/components/Nabvar";


export default function Home() {
  return (
    <>
      <header className="flex flex-col items-center justify-center w-full min-h-screen gap-5">
        <Nabvar />
        <h1 className="max-w-4xl text-6xl font-semibold text-center">
          Sube tus imagenes y manten <span className="text-red-500">espacio</span> libre en tu dispositivo
        </h1>
        <p className="max-w-3xl py-4 text-lg">Guarda tus imagenes y que mas te gustan y manten un control de estas mismas</p>
        <a className="px-4 py-3 font-medium rounded-md text-background bg-foreground">Ver mas proyectos</a>
      </header>
    </>
  );
}
