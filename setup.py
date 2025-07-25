import setuptools


with open("README.md","r",encoding="utf-8") as f:
    long_description = f.read()


__version__ = "0.0.0",
REPO_NAME = "finalyearproject"
AUTHOR_USER_NAME = "satkar12"
SRC_REPO = "quickPrep"
AUTHOR_EMAIL = "gautamsatkar10@gmail.com"



setuptools.setup(
    name="your_project_name",
    version="0.1.0",
    author="Your Name",
    author_email="you@example.com",
    description="A small package for NLP app",
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    url=f"https://github.com/{AUTHOR_USER_NAME}/{REPO_NAME}",
    project_urls = {
        "Bug Tracker":f"https://github.com/{AUTHOR_USER_NAME}/{REPO_NAME}/issues",
    },
    package_dir={"":"src"},
    packages=setuptools.find_packages(where="src"),

)