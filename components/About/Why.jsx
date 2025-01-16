const Why = ({ title, desc, icon: Icon }) => {
  return (
    <div className="flex -tracking-0.04 gap-8 font-manrope">
      <Icon className="text-5xl mt-2" />
      <div className="flex flex-col gap-2 lg:max-w-2xl">
        <h3 className="font-semibold text-2xl font-manrope  ">{title}</h3>
        <p className="text-2xl">{desc}</p>
      </div>
    </div>
  )
}

export default Why
