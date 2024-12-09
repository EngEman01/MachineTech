function ErrorMessage({ message }) {
  return (
    <div className="text-center p-8">
      <p className="text-red-600">{message}</p>
    </div>
  );
}

export default ErrorMessage;