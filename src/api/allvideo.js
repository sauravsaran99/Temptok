export const readAll = async () => {
  try {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      page: 1,
      limit: 1000,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    const data = await fetch(
      'http://tiktok-clone-backend.moneyyapp.in/v1/video/readAll?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUGhvbmVOdW1iZXIiOiI4NjE5ODgzNjYzIiwiaWF0IjoxNjQ3MjYwMDY0fQ.fOYX04YwCJCbH1Zs3V5OMV6BaXAzyYhK7uVDANUf_Ds',
      requestOptions,
    );

    const response = await data.json();
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};
