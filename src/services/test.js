import React, { useState } from "react";
import { supabase } from "./supabaseClient";

function UploadFile() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  async function uploadArquivo() {
    if (!file) {
      alert("Selecione um arquivo antes de enviar.");
      return;
    }

    // Pegando a extensão do arquivo
    const extensao = file.name.split(".").pop().toLowerCase();

    // Lista de formatos permitidos
    const formatosPermitidos = ["png", "jpg", "jpeg", "gif", "svg", "webp", "pdf"];

    if (!formatosPermitidos.includes(extensao)) {
      alert("Apenas imagens e PDFs são permitidos!");
      return;
    }

    try {
      setUploading(true);

      const { data, error } = await supabase.storage
        .from("uploads")  // Bucket correto!
        .upload(`arquivos/${Date.now()}-${file.name}`, file, {
          contentType: file.type,  // Define corretamente o tipo de arquivo
          cacheControl: "3600",
          upsert: false,
        });

      if (error) {
        throw error;
      }

      alert("Arquivo enviado com sucesso!");
      console.log("Arquivo salvo em:", data);
    } catch (error) {
      console.error("Erro ao enviar arquivo:", error.message);
      alert("Erro ao enviar o arquivo. Tente novamente.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <h2>Upload de Arquivos (Apenas Imagens e PDFs)</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadArquivo} disabled={uploading}>
        {uploading ? "Enviando..." : "Enviar Arquivo"}
      </button>
    </div>
  );
}

export default UploadFile;
