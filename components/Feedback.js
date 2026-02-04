const Feedback = () => {
  return (
    <section className="mt-10">
      
      <div className="rounded-2xl border border-base-300 bg-base-200/60 p-6 md:p-8 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold">
            💬
          </span>
          <h2 className="text-lg md:text-xl font-semibold tracking-tight text-base-content">
            Feedback
          </h2>
        </div>

        <p className="text-sm md:text-base text-base-content/80">
          Det här är ett work in progress och din feedback är värdefull. Skriv
          gärna vad som är bra, vad som är mindre bra eller om du saknar något.
          <br></br>
          Exempel: <br></br> – Det här var extra bra … <br></br> – Det här var
          otydligt … <br></br>– Det saknas … <br></br>– Jag hade önskat …
        </p>

        <div className="space-y-3">
          <textarea
            className="textarea textarea-bordered w-full min-h-[140px] text-sm md:text-base"
            placeholder="Skriv här..."
          />

          <div className="flex justify-end">
            <button className="btn btn-primary btn-sm md:btn-md">
              Skicka feedback
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feedback
