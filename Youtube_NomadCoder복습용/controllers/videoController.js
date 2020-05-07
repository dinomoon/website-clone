export const videoDetail = (req, res) => {
  const {
    params: { id },
  } = req;
  res.render("videoDetail", { title: "video-detail", id });
};

export const videoEdit = (req, res) =>
  res.render("videoEdit", { title: "video-edit" });

export const upload = (req, res) => res.render("upload", { title: "upload" });
