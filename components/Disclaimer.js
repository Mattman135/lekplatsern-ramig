const Disclaimer = () => {
  return (
    <section className="mt-8">
      <div className="rounded-2xl border border-base-300 bg-base-200/60 p-6 md:p-8 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-warning/10 text-warning">
            <span className="text-lg">🚧</span>
          </div>

          <div className="space-y-3 text-sm md:text-base">
            <h2 className="text-base md:text-lg font-semibold tracking-tight text-base-content">
              Work in progress
            </h2>

            <p className="text-base-content/80">
              Den här directoryn är under aktiv utveckling. Innehåll, struktur
              och rekommendationer kan ändras över tid.
            </p>

            <p className="text-base-content/80">
              Syftet med directoryn är <strong>kuration</strong> vilket i
              praktiken betyder att jag har gått igenom mycket material och
              samlat det jag tycker är mest relevant, användbart och värt din
              tid, på ett ställe.
            </p>

            <p className="text-base-content/80">
              Istället för att lista “allt”, försöker jag lyfta fram det som
              faktiskt är bra och som jag själv skulle använda eller
              rekommendera.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Disclaimer
