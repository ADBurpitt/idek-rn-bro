.PHONY : init

init:
	cd backend \
	./build.sh \
	aws cloudformation package --template template.yaml --s3-bucket frankfurt-templates --output-template api.yaml \
	python sam-translate.py --input-file="pkg.yaml" --output-file="../aws2/API.json" \
	aws cloudformation package --template numba2.yaml --s3-bucket frankfurt-templates --output-template donezo.yaml \