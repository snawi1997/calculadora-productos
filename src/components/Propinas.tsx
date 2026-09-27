

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

interface Prop {
    calcularTotal: (item: number) => void
}



export const Propinas = ({calcularTotal} : Prop) => {
    return (
        <div>
            <h1 className="font-bold text-2xl py-3">Deja tu propina:</h1>
            <form>
                {tipOptions.map((tip) => (
                    <div key={tip.id} className="flex gap-2">
                        <label htmlFor={tip.id}>{tip.label}</label>
                        <input
                            type="radio"
                            value={tip.value}
                            id={tip.id}
                            name="tip"
                            onChange={(e) => calcularTotal(+e.target.value) }
                        />
                    </div>
                ))}
            </form>

        </div>
    )
}
