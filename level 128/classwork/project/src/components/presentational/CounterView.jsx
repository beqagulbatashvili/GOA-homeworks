function CounterView({count, decrease}) {
    return(
        <div>
            <p>{count}</p>
            <button> onClick={decrease}</button>
        </div>
    )
}

export default CounterView;