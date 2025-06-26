import requests
import re

def fetch_unicode_grid(doc_url):
    # Fetch the raw text content from the public Google Doc
    response = requests.get(doc_url)
    html = response.text

    # Extract the lines that match the expected format: character, x, y
    # Format example from the document: U+2588 (219, 0)
    pattern = re.compile(r'U\+([0-9A-F]+)\s+\((\d+),\s*(\d+)\)')
    matches = pattern.findall(html)

    if not matches:
        print("No matches found.")
        return

    # Convert matches to a list of tuples (char, x, y)
    data = []
    max_x = max_y = 0
    for hex_code, x, y in matches:
        char = chr(int(hex_code, 16))
        x = int(x)
        y = int(y)
        data.append((char, x, y))
        max_x = max(max_x, x)
        max_y = max(max_y, y)

    # Create the grid filled with spaces
    grid = [[' ' for _ in range(max_x + 1)] for _ in range(max_y + 1)]

    # Place characters into the grid
    for char, x, y in data:
        grid[y][x] = char

    # Print the grid line by line
    for row in grid:
        print(''.join(row))

# Example usage
doc_url = "https://docs.google.com/document/u/0/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub?pli=1"
fetch_unicode_grid(doc_url)