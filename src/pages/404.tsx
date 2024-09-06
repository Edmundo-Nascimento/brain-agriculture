import { useNavigate } from "react-router-dom";

export default function Error404() {
  const navigate = useNavigate();

  function redirectTo() {
    navigate("")
  }

  return (
    <div>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative  px-6 sm:mx-auto sm:max-w-lg sm:px-10">
          <div className="mx-auto max-w-md">
            <div>
              <div className="space-y-3 text-base leading-7 text-gray-600">
                <h4 className="font-bold text-9xl text-center text-secondary">404</h4>
                <h4 className="font-bold text-center text-xl text-secondary">Página não encontrada</h4>

                <div className="mt-2 text-center text-secondary font-semibold">
                  <p onClick={redirectTo} className="underline cursor-pointer">Ir para página principal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}