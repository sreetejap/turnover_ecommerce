export default function Verify() {
  return (
    <div className="mx-auto mt-20 h-screen max-w-md max-w-sm rounded border">
      <form action="/" method="POST" className="px-4 py-6 shadow-md">
        <div className="mb-6 flex justify-center gap-2">
          <input
            className="h-12 w-12 rounded-md border text-center shadow-sm focus:border-teal-500 focus:ring-teal-500"
            type="text"
            id="1"
            name="1"
            maxLength={1}
            pattern="[0-9]"
            inputMode="numeric"
            autoComplete="one-time-code"
            required
          />
          <input
            className="h-12 w-12 rounded-md border text-center shadow-sm focus:border-teal-500 focus:ring-teal-500"
            type="text"
            id="2"
            name="2"
            maxLength={1}
            pattern="[0-9]"
            inputMode="numeric"
            autoComplete="one-time-code"
            required
          />
          <input
            className="h-12 w-12 rounded-md border text-center shadow-sm focus:border-teal-500 focus:ring-teal-500"
            type="text"
            id="3"
            name="3"
            maxLength={1}
            pattern="[0-9]"
            inputMode="numeric"
            autoComplete="one-time-code"
            required
          />
          <input
            className="h-12 w-12 rounded-md border text-center shadow-sm focus:border-teal-500 focus:ring-teal-500"
            type="text"
            id="4"
            name="4"
            maxLength={1}
            pattern="[0-9]"
            inputMode="numeric"
            autoComplete="one-time-code"
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="focus:shadow-outline rounded bg-teal-500 px-4 py-2 font-bold text-white hover:bg-teal-700 focus:outline-none"
            type="button"
          >
            Verify
          </button>
          <a
            className="ml-4 inline-block align-baseline text-sm font-bold text-teal-500 hover:text-teal-800"
            href="#"
          >
            Resend OTP
          </a>
        </div>
      </form>
    </div>
  );
}
