export default function Loading() {
  return (
    <div className="flex justify-center my-4 py-4 px-2 rounded-lg bg-bLightSecondary dark:bg-bDarkSecondary w-full sm:max-w-xl">
      <svg className="animate-spin h-16 w-16" viewBox="0 0 24 24">
        <path
          className="opacity-75 text-accent1"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
}
