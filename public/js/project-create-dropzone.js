var fancyDropzone = document.querySelector("#my-fancy-dropzone");

        fancyDropzone && ClassicEditor.create(document.querySelector("#my-fancy-dropzone")).then(function(d) {
	    e.ui.view.editable.element.style.height = "1800px"
        }).catch(function(d) {
            console.error(d)
        });

    var previewTemplate, dropzone, dropzonePreviewNode = document.querySelector("#file-preview-list");

    dropzonePreviewNode && (dropzonePreviewNode.id = "", previewTemplate = dropzonePreviewNode.parentNode.innerHTML, 
    dropzonePreviewNode.parentNode.removeChild(dropzonePreviewNode), dropzone = new Dropzone("#fancyDropzone", {
	url: "../", // file path here
	method: "post",
	previewTemplate: previewTemplate,
	previewsContainer: "#file-preview"
}));