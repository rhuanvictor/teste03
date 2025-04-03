import subprocess

def run_eslint(file_path):
    # Caminho completo para o executável do eslint.js
    eslint_path = r'C:\Users\rhuan\AppData\Roaming\npm\node_modules\eslint\bin\eslint.js'
    result = subprocess.run(['node', eslint_path, file_path], stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
    return result.stdout.decode('utf-8'), result.stderr.decode('utf-8')

file_path = r'C:\Users\rhuan\Documents\Developer\easy-nextui-main\components\scrolling-banners\scrolling-banners.tsx'
stdout, stderr = run_eslint(file_path)
if stderr:
    print(f"Erro: {stderr}")
else:
    print(stdout)


