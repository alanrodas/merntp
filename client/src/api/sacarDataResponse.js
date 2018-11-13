export default function sacarDataDeResponse(axiosPromise) {
  return new Promise((resolve, reject) =>
    axiosPromise.then(res => resolve(res.data)).catch(err => reject(err))
  );
}
