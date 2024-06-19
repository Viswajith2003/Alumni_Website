"use client";
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { db, storage } from "../../backend/firebase/config";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

export default function GalleryEdit() {
  const [gallery, setGallery] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState({
    id: null,
    img: "",
    galleryName: "",
  });

  useEffect(() => {
    const fetchGallery = async () => {
      const querySnapshot = await getDocs(collection(db, "gallery"));
      const fetchedGallery = [];
      querySnapshot.forEach((doc) => {
        fetchedGallery.push({ id: doc.id, ...doc.data() });
      });
      setGallery(fetchedGallery);
    };

    fetchGallery();
  }, []);

  const handleUpload = async (event) => {
    event.preventDefault();
    const file = event.target.image.files[0];
    const galleryName = event.target.galleryName.value;

    if (file && galleryName) {
      const storageRef = ref(storage, `images/${file.name}`);
      await uploadBytes(storageRef, file);
      const imgUrl = await getDownloadURL(storageRef);

      const newImage = {
        img: imgUrl,
        galleryName,
      };

      if (isEditing) {
        const docRef = doc(db, "gallery", currentItem.id);
        await updateDoc(docRef, newImage);
        setGallery(
          gallery.map((item) =>
            item.id === currentItem.id
              ? { id: currentItem.id, ...newImage }
              : item
          )
        );
        setIsEditing(false);
        setCurrentItem({ id: null, img: "", galleryName: "" });
      } else {
        const docRef = await addDoc(collection(db, "gallery"), newImage);
        setGallery([...gallery, { id: docRef.id, ...newImage }]);
      }

      event.target.reset();
    }
  };

  const handleDelete = async (id, imgPath) => {
    const docRef = doc(db, "gallery", id);
    await deleteDoc(docRef);

    const imageRef = ref(storage, imgPath);
    await deleteObject(imageRef);

    setGallery(gallery.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setIsEditing(true);
    setCurrentItem(item);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 p-4 border rounded shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          {isEditing ? "Edit Image" : "Upload Image"}
        </h2>
        <form onSubmit={handleUpload} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image
            </label>
            <input
              type="file"
              name="image"
              className="mt-1 p-2 border rounded w-full"
              required={!isEditing}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gallery Name
            </label>
            <input
              type="text"
              name="galleryName"
              defaultValue={currentItem.galleryName}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {isEditing ? "Update" : "Upload"}
          </button>
        </form>
      </div>

      <div className="p-4 border rounded shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Gallery List</h2>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600">
                No:
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600">
                IMG
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600">
                Gallery Name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {gallery.map((item, index) => (
              <tr key={item.id}>
                <td className="px-6 py-4 border-b border-gray-300">
                  {index + 1}
                </td>
                <td className="px-6 py-4 border-b border-gray-300">
                  <img
                    src={item.img}
                    alt={item.galleryName}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="px-6 py-4 border-b border-gray-300">
                  {item.galleryName}
                </td>
                <td className="px-6 py-4 border-b border-gray-300">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id, item.img)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
