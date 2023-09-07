type Props = {
  params: {
    lang: string;
    localeSlug: string;
  };
};

export default async function PageRoute({ params }: Props) {
  const locale = params.lang;

  // return 404 page boilerplate with tailwindcss
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-3 text-2xl">Page not found</p>
      </main>
    </div>
  );
}
