interface Props {
  display: boolean
}

function RegistrationForm(props: Props) {
  return (
    <div className="flex p-4" style={props.display ? { display: 'flex' } : { display: 'none' }}>
      <form>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center">Email:</div>
          <input type="email" name="email" />
        </div>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center">Password:</div>
          <input type="password" name="password" />
        </div>
        <div className="grid grid-cols-2 gap-2 mb-8">
          <div className="flex items-center">Confirm password:</div>
          <input type="password" name="confirmPassword" />
        </div>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  )
}

export default RegistrationForm
