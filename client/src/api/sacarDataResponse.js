export default function sacarDataResponse(axiosPromise) {
  return new Promise((resolve, reject) =>
    axiosPromise.then(res => resolve(res.data)).catch(err => reject(err))
  );
}
